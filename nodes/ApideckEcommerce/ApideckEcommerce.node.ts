import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { ordersDescription } from './resources/orders';
import { productsDescription } from './resources/products';
import { customersDescription } from './resources/customers';
import { storesDescription } from './resources/stores';

export class ApideckEcommerce implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Apideck Ecommerce',
		name: 'N8nDevApideckEcommerce',
		icon: { light: 'file:./apideck-ecommerce.png', dark: 'file:./apideck-ecommerce.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Ecommerce API documentation.',
		defaults: { name: 'Apideck Ecommerce' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevApideckEcommerceApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Orders",
					"value": "Orders",
					"description": ""
				},
				{
					"name": "Products",
					"value": "Products",
					"description": ""
				},
				{
					"name": "Customers",
					"value": "Customers",
					"description": ""
				},
				{
					"name": "Stores",
					"value": "Stores",
					"description": ""
				}
			],
			"default": ""
		},
		...ordersDescription,
		...productsDescription,
		...customersDescription,
		...storesDescription
		],
	};
}
