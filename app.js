var express = require('express');

var app = express();

app.post('/recover', (request, response) => {
    response.send(recoverPaymentIntention);
});


app.listen(3005, function () {
    console.log('Example app listening on port 3005!');
});

const recoverPaymentIntention = {
    "payload": {
        "uuid": "f05a01d5-cf05-4317-aaa2-0f76e3806fa4",
        "intention": {
            "qr_type": "DYNAMIC",
            "deferred_capture": false,
            "description": "Falabella Cuarentena Integración",
            "country": "CL",
            "channel": "WEB",
            "commerce": "Viajes",
            "merchant_fantasy_name": "Falabella Cuarentena Integración",
            "logo": "https://fifpaymentswallettest.blob.core.windows.net/application-logos/5e25ad490942f3001625c167_WALLET_QR_2020-05-11T16%3A36%3A13Z.png",
            "purchase_order": "256894601",
            "amount": {
                "currency": "CLP",
                "total": 666
            },
            "item_list": {
                "items": [
                    {
                        "sku": "TVLG43S",
                        "name": "TVLG43",
                        "description": "Tv LG 43",
                        "quantity": 1,
                        "price": 180000,
                        "tax": 0
                    }
                ]
            },
            "shipping": {
                "country": "CL",
                "address": "Dirección Sucursal Falabella Ahumada",
                "city": "Santiago",
                "recipient_first_name": "Jhon Doe Son",
                "recipient_last_name": "Jhon Doe Son",
                "phone_number": "+56 9 8762 1244"
            },
            "redirect_urls": {
                "return_url": "http://www.conntesol.org/wp-content/uploads/2018/03/PaymentSuccessful-1.png",
                "cancel_url": "http://www.sclance.com/pngs/error-png/error_png_451017.jpg"
            }
        },
        "payment_methods": [
            {
                "payment_type": "CARD",
                "card_type": "CREDIT",
                "on_us": false,
                "name": "LAGARTOS PRUEBA TWO AND A HALF MAN",
                "creation_date": "2021-07-02T15:16:05.655Z",
                "card_uuid": "6bbc2b85-db48-11eb-846a-3e9cefc41e67",
                "card_name": "LAGARTOS PRUEBA TWO AND A HALF MAN",
                "card_description": "VISA CORPBANCA",
                "default_card": false,
                "first_6_digits": "443861",
                "last_4_digits": "6777",
                "expiration_month": "06",
                "expiration_year": "2028",
                "second_factor_req": false,
                "selectable": true,
                "color": "PREMIER",
                "amount": {
                    "currency": "CLP",
                    "total": 666
                },
                "bank": "CORPBANCA",
                "brand": "VISA",
                "card_status": "ACTIVE",
                "installments": {
                    "installments_offer": [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    "default_installment_number": "1",
                    "installments_without_interest": [
                        "1",
                        "2"
                    ]
                }
            },
            {
                "payment_type": "P2P",
                "name": "Saldo Fpay",
                "creation_date": "2020-03-25",
                "available_limit": 104, // este
                "last_4_digits": "1234",
                "second_factor_req": false,
                "sufficient_amount": false, // ste 
                "above_limit_per_sva_tx": false,
                "amount": {
                    "currency": "CLP",
                    "total": 666
                }
            }
        ],
        "user_profile": {
            "id": "EW1YBN4WSYFEW4CZSGRXXCYCZQMMMCFP",
            "doc_number": "255143867",
            "doc_type": "RUT",
            "country": "cl",
            "auth_type": "payments",
            "customer_types": [],
            "first_name": "María ",
            "last_name": "García",
            "email": "slastra@technisys.com",
            "phones": [
                {
                    "country_code": "56",
                    "region_id": "9",
                    "number": "59886805",
                    "full_number": "56959886805"
                }
            ],
            "wallet_info": {
                "account_id": 24175675
            }
        }
    }
};

