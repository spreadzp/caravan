# Caravan

HUMAN HEALTH SYSTEM allows you to exchange confidential patient data with a doctor and doctor with a patient. A patient is any person from anywhere in the world with data from his body. Doctor - (doctor, group of doctors, clinic, AI algorithms) from anywhere in the world. To work with the system, we issued our own CRTN tokens. You can change CRTN / ETH and ETH / CRTN at https://caravan-hlt.web.app/exchange. The platform determines the cost in CRTN of the doctor's registration in the system and the commission in CRTN for the executed order. The price of the service in CRTN is determined by the doctor when he makes the registration. A patient can choose a data processing service from any doctor based on the price of the service in the CRTN, the doctor's rating or other information that the doctor has provided about himself.
When the patient has chosen a doctor and clicked "Order a service", he sends a file with data that is encrypted with the doctor's public key. After that, the file with the encrypted data is temporarily stored in the public storage Firestorage. From Firestorage, the received link for downloading the encrypted file is attached to the order and the amount of CRTN tokens (determined by the doctor as the price of the service) is deposited from the patient's account. The doctor must provide a report for the time specified by the smart contract, after which he receives payment. If the report is not provided during this time CRTNs are returned to the patient, the doctor's rating is reduced by 1. If a patient makes an order with the same doctor more than 1 time, the doctor's rating increases by 1.
[HUMAN HEALTH SYSTEM.pptx](https://github.com/spreadzp/caravan/files/4981532/HUMAN.HEALTH.SYSTEM.pptx)

![HHS](https://user-images.githubusercontent.com/11519562/88532707-b6e78580-d00d-11ea-91b7-4d84b32c1094.png)

site: https://caravan-hlt.web.app/

## start the project

```
  npm i
  npm run gan-cli
  npm run c-mig
in new terminal
npm start
redirect in a browser
open page localhost:4200
```
