import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApideckEcommerceApi implements ICredentialType {
        name = 'N8nDevApideckEcommerceApi';

        displayName = 'Apideck Ecommerce API';

        icon: Icon = { light: 'file:../nodes/ApideckEcommerce/apideck-ecommerce.png', dark: 'file:../nodes/ApideckEcommerce/apideck-ecommerce.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://unify.apideck.com',
                        required: true,
                        placeholder: 'https://unify.apideck.com',
                        description: 'The base URL of your Apideck Ecommerce API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
