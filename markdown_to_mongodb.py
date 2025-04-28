import os
import sys
import glob
from pymongo import MongoClient
from datetime import datetime

def import_markdown_files(folder_path, mongo_uri, database_name, collection_name):
    # Connect to MongoDB
    client = MongoClient(mongo_uri)
    db = client[database_name]
    collection = db[collection_name]

    # Find all .md files in the folder
    markdown_files = glob.glob(os.path.join(folder_path, "*.md"))

    if not markdown_files:
        print("No markdown files found in the folder.")
        return

    documents = []

    for file_path in markdown_files:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()

            doc = {
                "title": os.path.basename(file_path),
                "content": content,
                "created_at": datetime.utcnow()
            }

            documents.append(doc)

    if documents:
        result = collection.insert_many(documents)
        print(f"Inserted {len(result.inserted_ids)} documents into '{database_name}.{collection_name}'.")

if __name__ == "__main__":
    if len(sys.argv) != 5:
        print("Usage: python import_markdown_to_mongodb.py <folder_path> <mongo_uri> <database_name> <collection_name>")
        sys.exit(1)

    folder_path = sys.argv[1]
    mongo_uri = sys.argv[2]
    database_name = sys.argv[3]
    collection_name = sys.argv[4]

    import_markdown_files(folder_path, mongo_uri, database_name, collection_name)
