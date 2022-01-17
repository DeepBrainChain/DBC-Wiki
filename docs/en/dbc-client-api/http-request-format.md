# Http request format description

`request method`：POST

`request URL`：http://<**dbc_client_ip**>:<**dbc_client_port**>/api/v1/**specific request path**

`request body`：
```json
{
    "peer_nodes_list": [
        // The node_id of the requesting machine, currently only supports filling in 1
        "460e56d4cdade97065ddf4d0dfeee7ab7e6e77d0058fad07e43123fadd1d8d2a"
    ],
    "additional": {
        // Various parameters to be passed with each request

    },
   // Identity authentication information
   ...
}
```
**identity authentication information**There are a total of 3 types, when requesting, fill in any one of the following：

>**Type 1: renter wallet signature**
>
>***instruction***: It is necessary to know the renter's wallet address and the corresponding wallet private key. Therefore, the renter himself is usually the one who uses this method.。
>
>- Signature method：`./sign_tool [wallet address] [wallet private key]`
>
>>output：
>>![import](./assets/wallet_sign.png)
>- Fill in the generated 3 values into the request body, the final request body format is as follows：
>    ```json
>    {
>       "peer_nodes_list": [
>            "460e56d4cdade97065ddf4d0dfeee7ab7e6e77d0058fad07e43123fadd1d8d2a"
>        ],
>        "additional": {
>
>        },
>        "wallet":"5Dy8ULx1De6u3WE9ixpy1VKK2CVssvsjQT15qcmQsG662Zj4",
>        "nonce":"5q7KRn4d8EmXFFsim8vHBp23N2CpERbD2mWR3WCo1o3teZnGxYEh4N6",
>        "sign":"2460725b2f5e737cd810c773be61b9b27c3b9dbdac4af9cf25c7be9949ad7202a0b7467f71ad843888f482662d3ae2e4fa566d3c1930a3fa90f3dcb97ea4098d"
>    }
>    ```

>**Type 2: Multi-signature wallet signature**
>
>***instruction***: Need to know all wallet addresses of multi-signature accounts, and wallet signatures of a threshold number of accounts。
>- Take 3 wallet addresses of multi-signature accounts and 2 wallet signatures as an example, the interpretation of each field is as follows：
> 
>    ```json
>    "multisig_accounts": {
>        // All wallet addresses of multi-signature accounts
>        "wallets": [
>            "5Dy8ULx1De6u3WE9ixpy1VKK2CVssvsjQT15qcmQsG662Zj4",
>            "5HgVTsXnUBmaL5F2RBjKmXMoAeG9Avuyk9tmgnnVx28u2ZrS",
>            "5DhBmvUkj9YWvdDtJWJwaGrFRpzeqW4Ch5oTyTamXG2LMHVQ"
>        ],
>        // The threshold when creating a multi-signature wallet
>        "threshold": "2",
>        // Sign with any 2 wallet private keys in the multi-signature account (signature method is the same as in the first type)
>        "signs": [
>            {
>                "wallet":"5Dy8ULx1De6u3WE9ixpy1VKK2CVssvsjQT15qcmQsG662Zj4",
>                "nonce":"5q7KRn4d8EmXFFsim8vHBp23N2CpERbD2mWR3WCo1o3teZnGxYEh4N6",
>                   "sign":"2460725b2f5e737cd810c773be61b9b27c3b9dbdac4af9cf25c7be9949ad7202a0b7467f71ad843888f482662d3ae2e4fa566d3c1930a3fa90f3dcb97ea4098d"
>            },
>            {
>                "wallet":"5HgVTsXnUBmaL5F2RBjKmXMoAeG9Avuyk9tmgnnVx28u2ZrS",
>                "nonce":"5t1mv263Qpnu5tk5xPDk86oXGUX8yXaYGpAWj2n6gU45HNmsQqLaAU7",
>                "sign":"c494cc517f3c181fd7206d03175b5c0c29d162e53aa88c557887241d104456272dc313501c8ae4e71dbcbae183942a119713974aff87aa1ef3870aa505be6384"
>            }
>        ]
>    }
>- The final request body format is as follows：
>   ```json
>   {
>       "peer_nodes_list": [
>            "460e56d4cdade97065ddf4d0dfeee7ab7e6e77d0058fad07e43123fadd1d8d2a"
>        ],
>        "additional": {
>
>        },
>        "multisig_accounts": {
>           "wallets": [
>               "5Dy8ULx1De6u3WE9ixpy1VKK2CVssvsjQT15qcmQsG662Zj4",
>               "5HgVTsXnUBmaL5F2RBjKmXMoAeG9Avuyk9tmgnnVx28u2ZrS",
>               "5DhBmvUkj9YWvdDtJWJwaGrFRpzeqW4Ch5oTyTamXG2LMHVQ"
>           ],
>           "threshold": "2",
>           "signs": [
>               {
>                   "wallet":"5Dy8ULx1De6u3WE9ixpy1VKK2CVssvsjQT15qcmQsG662Zj4",
>                   "nonce":"5q7KRn4d8EmXFFsim8vHBp23N2CpERbD2mWR3WCo1o3teZnGxYEh4N6",
>                   "sign":"2460725b2f5e737cd810c773be61b9b27c3b9dbdac4af9cf25c7be9949ad7202a0b7467f71ad843888f482662d3ae2e4fa566d3c1930a3fa90f3dcb97ea4098d"
>               },
>               {
>                   "wallet":"5HgVTsXnUBmaL5F2RBjKmXMoAeG9Avuyk9tmgnnVx28u2ZrS",
>                   "nonce":"5t1mv263Qpnu5tk5xPDk86oXGUX8yXaYGpAWj2n6gU45HNmsQqLaAU7",
>                   "sign":"c494cc517f3c181fd7206d03175b5c0c29d162e53aa88c557887241d104456272dc313501c8ae4e71dbcbae183942a119713974aff87aa1ef3870aa505be6384"
>               }
>           ]
>       }
>   }
>   ```

>**Type 3: Use session_id and session_id_sign distributed by the machine renter**
>
>***instruction***: session_id and session_id_sign are the credentials of the renter to other third-party users who want to use the machine, and third-party users can use the session_id to access the machine.。
>
>***notice***：session_id can only be obtained and modified by the renter requesting the machine (request method: refer to the first and second types above)
>
>- The machine renter requests to obtain the session_id of the machine (request method: refer to the first and second types above; here the first method is used as an example), the return value is session_id：
>    ```json
>    {
>       "peer_nodes_list": [
>            "460e56d4cdade97065ddf4d0dfeee7ab7e6e77d0058fad07e43123fadd1d8d2a"
>        ],
>        "additional": {
>
>        },
>        "wallet":"5Dy8ULx1De6u3WE9ixpy1VKK2CVssvsjQT15qcmQsG662Zj4",
>        "nonce":"5q7KRn4d8EmXFFsim8vHBp23N2CpERbD2mWR3WCo1o3teZnGxYEh4N6",
>        "sign":"2460725b2f5e737cd810c773be61b9b27c3b9dbdac4af9cf25c7be9949ad7202a0b7467f71ad843888f482662d3ae2e4fa566d3c1930a3fa90f3dcb97ea4098d"
>    }
>    ```
>- Machine renter signs session_id：
> ![import](./assets/session_id_sign.png)
> Distribute the generated session_id and session_id_sign to third-party users。
>- `After the third-party user gets the session_id and session_id_sign, the body format of the request is：
>    ```json
>    {
>       "peer_nodes_list": [
>            "460e56d4cdade97065ddf4d0dfeee7ab7e6e77d0058fad07e43123fadd1d8d2a"
>        ],
>        "additional": {
>
>        },
>        "session_id":"3QRjS1PsbDReGJKVBBRqxUh9RqXB5jbfHJ8bMgGoJ3C9HHHHm9rCmmh",
>        "session_id_sign":"ca89d0adb44a03c6f22a9205a06e22f682805f8c8ee25dd182e36ceb581899001196ce94c40e2147247f967256d7e010318e4387853939d94ba99c81f16a358f"
>    }
>    ```
