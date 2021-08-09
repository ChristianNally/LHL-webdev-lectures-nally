cp db-snapshot.sql db-snapshot-previous.sql
pg_dump -U postgres -p 5433 --column-inserts --clean spot > db-snapshot.sql
#git add db-snapshot.sql
#git commit -m "updating the db snapshot."
#git push

