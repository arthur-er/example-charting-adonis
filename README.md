## Example charting problem
Possible object outputs represented in [example.ts](./example/outputs.ts)

Docker-compose file and [factory](./database/factories/index.ts) included

[Related stack-overflow question](https://stackoverflow.com/questions/69541038/fill-missing-date-gaps-in-sql-query-on-postgresql)

## Current tried queries and outputs:

Query
```sql
SELECT date_trunc('hour', created_at) as hour_created, count(created_at), status 
FROM messages 
WHERE created_at >= current_timestamp - interval '1 day'
GROUP BY (status, hour_created)
```

Output
```json
{
  "hour_created": "2021-10-13 07:00:00-04",
  "count": 29,
  "status": "queued"
}
```
