var express = require('express');

var app = express();

app.get('/tarjetas', (request, response) => {
    response.send(tarjetas);
});

app.get('/activos', (request, response) => {
    response.send(activos);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

const tarjetas = {
    "id": "",
    "status": 200,
    "resource": "/api/v1.0/tarjetas",
    "data": [
        {
            "id_tarjeta": 28,
            "numero_tarjeta": "xxxx xxxx xxxx 7934",
            "fecha_emision_tarjeta": "2005-01-26",
            "fecha_activacion": "2005-02-11",
            "logo": {
                "idLogo": 2,
                "codigoLogo": "922",
                "descripcionLogo": "SANTA ISABEL"
            },
            "rol": {
                "codigoTitularidad": "10",
                "titularidad": "TITULAR"
            },
            "cuenta": {
                "idCuenta": 14,
                "numeroCuenta": "0006152902399527934",
                "indicadorVigente": 1,
                "fechaVencimientoFacturacion": "2014-01-02",
                "diasMoraReal": 0,
                "fechaUltActualizacion": "2018-03-15T17:38:35.603000000Z",
                "fechaApertura": "2005-01-26",
                "bloqueos_cuenta": {
                    "idTipoBloqueoCuenta1": null,
                    "codigoBloqueoCuenta1": null,
                    "descripcionBloqueoCuenta1": null,
                    "idTipoBloqueoCuenta2": null,
                    "codigoBloqueoCuenta2": null,
                    "descripcionBloqueoCuenta2": null
                },
                "estado_autorizador_cuenta": {
                    "codigoAutorizadorCuenta": "01",
                    "idEstadoAutorizadorCuenta": 34,
                    "descripcionAutorizador": "ACTIVA"
                },
                "saldos_cupos_cuenta": {
                    "montoSaldoPendiente": 0.00,
                    "cupoNacionalCupoVirtual": 226000.00,
                    "deudaTotalNacional": 0.00,
                    "dispoTotalEnClp": 226000.00,
                    "dispoTotalEnUs": 0.00,
                    "cupoTotalAvanceEfectivo": null,
                    "dispoParaAvances": 22600.00
                }
            },
            "bloqueos_tarjeta": {
                "idTipoBloqueoTarjeta": 11,
                "codigoBloqueoTarjeta": "S",
                "descripcionBloqueoTarjeta": "Emisor"
            },
            "estado_autorizador_tarjeta": {
                "idEstadoAutorizadorTarjeta": 11,
                "codigoAutorizadorTarjeta": "11",
                "descripcionAutorizadorTarjeta": "BLOQUEADA"
            }
        }
    ],
    "metadata": {
        "page_number": "0",
        "query_string": "filter=fecha_activacion=2005-02-11,id_cuenta=14&sort=fecha_activacion&page_number=0&page_size=3",
        "page_size": "3"
    }
};

const activos = {
    "maximo": 10,
    "pagina": 0,
    "cantidad_elementos": 2,
    "contenido": [
        {
            "id": 4294585,
            "tipo_activo": "TARJETA",
            "imagen_activo": "/Content/img/logos/visa.gif",
            "icono_bloqueo": "/Content/img/logos/visa_no_vigente.gif",
            "vigencia": true,
            "numero_cuenta": "xxxx xxxx xxxx 7243",
            "rut_titular": "80008597",
            "id_tarjeta": 7070733,
            "numero_tarjeta": "xxxx xxxx xxxx 7243",
            "numero_tarjeta_tac": "xxxx xxxx xxxx 7243",
            "marca_tarjeta": "VISA",
            "numero_cuenta_tac": null,
            "estado_tarjeta": {
                "codigo": "21",
                "descripcion": "BLOQUEADA"
            },
            "saldo_pendiente": {
                "valor": 0,
                "moneda": "CLP",
                "simbolo": "$"
            },
            "fecha_actualizacion_saldo_pendiente": "2020-03-09T00:00:00Z",
            "fecha_ultimo_vencimiento": "0002-11-30T00:00:00Z",
            "mora": 0,
            "cupo_total": {
                "valor": 15714285,
                "moneda": "CLP",
                "simbolo": "$"
            },
            "cupo_utilizado": {
                "valor": 0,
                "moneda": "CLP",
                "simbolo": "$"
            },
            "cupo_disponible_compra": {
                "valor": 15714285,
                "moneda": "CLP",
                "simbolo": "$"
            },
            "cupo_disponible_avance_efectivo": {
                "valor": 15000000,
                "moneda": "CLP",
                "simbolo": "$"
            },
            "titularidad": "TITULAR",
            "nombre_titular": {
                "nombre": "NOMBRE",
                "apellido": "TESTING"
            },
            "estado_cuenta": {
                "codigo": "01",
                "descripcion": "ACTIVA"
            },
            "fecha_actualizacion_datos": "2020-02-26T19:45:52Z",
            "es_nueva": false,
            "tiene_tarjeta_impresa": true,
            "castigado": false,
            "castigo": null,
            "purgada": null,
            "tipo_purga": null
        },
        {
            "id": 4301468,
            "tipo_activo": "TARJETA",
            "imagen_activo": "/Content/img/logos/black.png",
            "icono_bloqueo": "/Content/img/logos/black_nv.png",
            "vigencia": true,
            "numero_cuenta": "xxxx xxxx xxxx 1663",
            "rut_titular": "80008597",
            "id_tarjeta": 7081654,
            "numero_tarjeta": "xxxx xxxx xxxx 1663",
            "numero_tarjeta_tac": "xxxx xxxx xxxx 1663",
            "marca_tarjeta": "BLACK",
            "numero_cuenta_tac": null,
            "estado_tarjeta": {
                "codigo": "",
                "descripcion": ""
            },
            "saldo_pendiente": {
                "valor": 0,
                "moneda": "CLP",
                "simbolo": "$"
            },
            "fecha_actualizacion_saldo_pendiente": "2020-03-09T00:00:00Z",
            "fecha_ultimo_vencimiento": null,
            "mora": 0,
            "cupo_total": {
                "valor": 15000000,
                "moneda": "CLP",
                "simbolo": "$"
            },
            "cupo_utilizado": {
                "valor": 0,
                "moneda": "CLP",
                "simbolo": "$"
            },
            "cupo_disponible_compra": {
                "valor": 15000000,
                "moneda": "CLP",
                "simbolo": "$"
            },
            "cupo_disponible_avance_efectivo": {
                "valor": 0,
                "moneda": "CLP",
                "simbolo": "$"
            },
            "titularidad": "TITULAR",
            "nombre_titular": {
                "nombre": "NOMBRE",
                "apellido": "TESTING"
            },
            "estado_cuenta": {
                "codigo": "-",
                "descripcion": "-"
            },
            "fecha_actualizacion_datos": "2019-02-02T10:24:01Z",
            "es_nueva": false,
            "tiene_tarjeta_impresa": true,
            "castigado": false,
            "castigo": null,
            "purgada": null,
            "tipo_purga": null
        }
    ],
    "cantidad_paginas": 1
};