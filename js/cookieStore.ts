const cookieStorage = {
    getItem: (item: string) => {
        const cookies: object = document.cookie
            .split(';')
            .map((cookie) => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});

        return cookies[item];
    },
    setItem: (item: string, value: object) => {
        const confirmTime: number = new Date().getTime();
        const expireTime: string = new Date(confirmTime + 24 * 60 * 60 * 1000).toUTCString();

        return (document.cookie = `${item}=${JSON.stringify(value)};expires=${expireTime};SameSite=Lax;Secure`);
    },
};

export default cookieStorage;
