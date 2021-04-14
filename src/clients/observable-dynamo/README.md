# @dot-subscribe/observable-dynamo

A very thin wrapper around the [AWS SDK v3 DynamoDB client](https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-dynamodb) which converts all of their commands to [Observables](https://rxjs-dev.firebaseapp.com/guide/observable). The API to use this package is identical to that of the original client - but wrapping with rxjs's `from()` is done for you.

## Installation

> npm install @dot-subscribe/observable-dynamo

## Features

The entire range of DynamoDB commands is supported.  
You may create and list tables, put and scan items, etc.

## Usage

If you're familiar with using the dynamo client from the [AWS SDK v3](https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-dynamodb), you will already know how to use this package.  

Here's an example of retrieving an item from DynamoDB.  


```ts
import { ObservableDynamoDB } from '@dynamo-dot-subscribe/observable-dynamo';

let client = new ObservableDynamoDB({
  region: 'ap-southeast-2',
  credentials: {
    accessKeyId: 'your aws access key id',
    secretAccessKey: 'your aws secret key'
  },
});

client.getItem({
  TableName: 'table name',
  Key: {
    id: {
      S: 'some id',
    },
  },
}).subscribe(output => {
  console.log(output.Item);
});
```

You may also use the send method directly.

```ts
import { GetItemCommand } from '@aws-sdk/client-dynamodb';

const command = new GetItemCommand({
  TableName: 'table name',
  Key: {
    id: {
      S: 'some id',
    },
  },
});

client.send(command).subscribe(output => {
  console.log(output.Item);
});
```

## But why did you make this?

I primarily use this package in a small Angular project of mine that edits and displays DynamoDB tables/rows.  
Angular recommends the use of Observables, so it made sense to abstract away the AWS SDK's use of promises.

## License

GPL 3.0 License

ObservableDynamoDB - An Observable DynamoDB Client

Copyright (C) 2020 Joshua Hull

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
