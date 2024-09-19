const getEnv = (key:string,defaultValue?:string):string=>{

    const value = import.meta.env[key] || defaultValue;
    if(value === undefined){
        throw new Error(`env variable ${key} is missing.`)
    }

    return value;
}

export const  SERVER_URL = getEnv("VITE_SERVER_URL");