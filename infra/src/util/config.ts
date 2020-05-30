export class Config {
    static ensureArgsSupplied(){
        let env = this.env();
        let app = this.app();
        if (app == undefined){
            console.error('App name not found in app.json');
        }
        if (env === undefined){
            console.error('Usage: --env=myEnvironment');
            process.exit(1);
        }
        if (env === 'true'){
            console.error('Missing equals sign, please use --env=<environment>');
            process.exit(1);
        }
    }

    static env(){
        return process.env.npm_config_env as string;
    }

    static app(){
        return this.loadConfig().name;
    }

    static appEnv(){
        return this.app() + '-' + this.env();
    }

    static hostedZoneId(){
        return this.loadConfig().hostedZoneId;
    }

    static domain(){
        return this.loadConfig().domain;
    }

    static certificateArn(){
        return this.loadConfig().certificateArn;
    }

    static isProduction(){
        return this.env() === 'production';
    }

    private static loadConfig(){
        return require('../../../app.json');
    }



}