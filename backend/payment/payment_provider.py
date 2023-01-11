import requests

def initiate_payment(mobile_number,amount):

    #replace witha appropriate payment provider_api
    
    api_endpoint= "http://example.com/payment/initiate"
    api_key = "YOUR_API_KEY"
    headers= {'Authorization':f'Bearer{api_key}'}
    data = {'mobile_number':mobile_number,'amount':amount}
    response = requests.post(api_endpoint,headers=headers,data=data)

    if response.status_code==200:
        return 'sucess'
    else:
        return 'failure'