package com.fesc.apipartidos.Security;

public class ConstantesSecurity {
    
    public static final long FECHA_EXPIRACION = 864000000; //el número se refiere al tiempo de expiracion que tiene el usuario dentro de la aplicacion
    public static final String SIGNUP_URL = "/usuario";
    public static final String HEADER_STRING = "Authorization";
    public static final String TOKEN_PREFIJO = "Bearer ";
    public static final String TOKEN_SECRETO = "v1l3vHULZ9eKPJE6AJKMq4lxHcClMHCTSQ5MwTtxpjM2ANdvl50buOPkTZvTXmqG8sHQvhkt5QL+NN8Cegtbkw=="; //token secreto
    
}
