import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const TelegramContext = createContext({});

export const TelegramProvider = ({ children }) => {
    const [webApp, setWebApp] = useState(null);

    useEffect(() => {
        const telegram = window.Telegram?.WebApp;
        if (telegram) {
            telegram.ready();
            setWebApp(telegram);
            console.log("Telegram WebApp initDataUnsafe:", telegram.initDataUnsafe); // Отладка
        }
    }, []);

    const value = useMemo(() => {
        return webApp
            ? {
                  webApp,
                  unsafeData: webApp.initDataUnsafe || "no-unsafeData",
                  user: webApp?.initDataUnsafe?.user || "no-user",
              }
            : {};
    }, [webApp]);

    return (
        <TelegramContext.Provider value={value}>
            {children}
        </TelegramContext.Provider>
    );
};

export const useTelegram = () => useContext(TelegramContext);
