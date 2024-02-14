import json
from datetime import datetime


# Read JSON file
json_file_path = "schema.json"
with open(json_file_path, "r") as file:
    data = json.load(file)
    
def generate_sql_statements(data):
    sql_statements = []
    created_tables = set()

    
    for entity_data in data["entities"]:
        entity_name = entity_data["entity_name"]
        entity_attributes = entity_data["attributes"]
    
        create_table_sql = f"CREATE TABLE {entity_name} (\n"
    
        for attribute_data in entity_attributes:
            attribute_name = attribute_data["attribute_name"]
            attribute_type = attribute_data["attribute_type"]
        
        # attributes mapping to SQL Server data types
            if attribute_type == "integer":
                attribute_type = "INT"
            elif attribute_type == "string":
                attribute_type = "VARCHAR(255)"
            else:
                sql_server_type = attribute_type
            constraints = []
            if attribute_data.get("key"):
                constraints.append("PRIMARY KEY")
            if attribute_data.get("autoIncrement"):
                constraints.append("IDENTITY(1,1)")
            if "default" in attribute_data:
                constraints.append(f"DEFAULT '{attribute_data['default']}'")

            # NOT NULL if allownull is false
            if not attribute_data.get("allowNull"):
                constraints.append("NOT NULL")

            # attributes in the table
            create_table_sql += (
                f"  {attribute_name} {sql_server_type} {' '.join(constraints)},\n"
            )
    
        create_table_sql = create_table_sql.rstrip(",\n") + "\n);\n"
        sql_statements.append(create_table_sql)

    for relationship_data in data.get("relationships", []):
        entity1 = relationship_data["entity1"]
        entity2 = relationship_data["entity2"]
        relationship_type = relationship_data["type"]

        if (
            relationship_type == "Many-to-Many"
            and (entity1, entity2) not in created_tables
            and (entity2, entity1) not in created_tables
        ):
            # Create table for many-to-many relationships
            relationship_table_name = f"{entity1}_{entity2}_relationship"
            relationship_table_sql = (
                f"CREATE TABLE {relationship_table_name} (\n"
                f"  {entity1}ID INT,\n"
                f"  {entity2}ID INT,\n"
                f"  PRIMARY KEY ({entity1}ID, {entity2}ID),\n"
                f"  FOREIGN KEY ({entity1}ID) REFERENCES {entity1}({entity1}ID),\n"
                f"  FOREIGN KEY ({entity2}ID) REFERENCES {entity2}({entity2}ID)\n"
                ");\n"
            )
            sql_statements.append(relationship_table_sql)
            created_tables.add((entity1, entity2))
            created_tables.add((entity2, entity1))

        elif (
            relationship_type == "One-to-Many"
            and (entity1, entity2) not in created_tables
        ):
            # Create table for one-to-many relationships
            relationship_table_name = f"{entity1}_{entity2}_relationship"
            relationship_table_sql = (
                f"CREATE TABLE {relationship_table_name} (\n"
                f"  {entity1}ID INT,\n"
                f"  {entity2}ID INT,\n"
                f"  PRIMARY KEY ({entity1}ID, {entity2}ID),\n"
                f"  FOREIGN KEY ({entity1}ID) REFERENCES {entity1}({entity1}ID),\n"
                f"  FOREIGN KEY ({entity2}ID) REFERENCES {entity2}({entity2}ID)\n"
                ");\n"
            )
            sql_statements.append(relationship_table_sql)
            created_tables.add((entity1, entity2))

        elif (
            relationship_type == "Many-to-One"
            and (entity2, entity1) not in created_tables
        ):
            # Create table for many-to-one relationships
            relationship_table_name = f"{entity1}_{entity2}_relationship"
            relationship_table_sql = (
                f"CREATE TABLE {relationship_table_name} (\n"
                f"  {entity1}ID INT,\n"
                f"  {entity2}ID INT,\n"
                f"  PRIMARY KEY ({entity1}ID, {entity2}ID),\n"
                f"  FOREIGN KEY ({entity1}ID) REFERENCES {entity1}({entity1}ID),\n"
                f"  FOREIGN KEY ({entity2}ID) REFERENCES {entity2}({entity2}ID)\n"
                ");\n"
            )
            sql_statements.append(relationship_table_sql)
            created_tables.add((entity2, entity1))

        elif (
            relationship_type == "One-to-One"
            and (entity1, entity2) not in created_tables
        ):
            # Create table for one-to-one relationships
            relationship_table_name = f"{entity1}_{entity2}_relationship"
            relationship_table_sql = (
                f"CREATE TABLE {relationship_table_name} (\n"
                f"  {entity1}ID INT,\n"
                f"  {entity2}ID INT,\n"
                f"  PRIMARY KEY ({entity1}ID, {entity2}ID),\n"
                f"  FOREIGN KEY ({entity1}ID) REFERENCES {entity1}({entity1}ID),\n"
                f"  FOREIGN KEY ({entity2}ID) REFERENCES {entity2}({entity2}ID)\n"
                ");\n"
            )
            sql_statements.append(relationship_table_sql)
            created_tables.add((entity1, entity2))

    return sql_statements


# output in .sql file
output_file_path = "script.sql"
with open(output_file_path, "w") as output_file:
    for statement in generate_sql_statements(data):
        output_file.write(
            f"/****** Script Date: {datetime.now().strftime('%m-%d-%Y %I:%M:%S %p')} ******/\n\n"
        )
        output_file.write(statement)

print(f"SQL statements have been written to {output_file_path}")
