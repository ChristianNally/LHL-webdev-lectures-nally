cp db-snapshot.sql db-snapshot-previous.sql
pg_dump --column-inserts --clean spot > db-snapshot.sql
git add db-snapshot.sql
git commit -m "updating the db snapshot."
git push

