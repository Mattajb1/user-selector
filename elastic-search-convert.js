/*
	This script is used to get users/teams list for arrays on user-selector.js

	Elastic request:
	GET /users/_search
	{
		"size": 9999,
		"_source": ["name", "teamId"],
		"query": {
			"match_all": {}
		}
	}
*/

const response = {}

const fs = require('fs');

const users = response.hits.hits.map(hit => ({
  name: hit._source.name,
  id: hit._id,
}));

fs.writeFileSync('response.json', JSON.stringify(users, null, 2), 'utf-8');

console.log('List saved to response.json');

