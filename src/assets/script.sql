CREATE TABLE IF NOT EXISTS formulario(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    correo TEXT,
    edad INTEGER
);

INSERT OR IGNORE INTO formulario (id, nombre, correo, edad) VALUES (1,'nombre1','test1@test.cl',53);
INSERT OR IGNORE INTO formulario (id, nombre, correo, edad) VALUES (2,'nombre2','test2@test.cl',23);
INSERT OR IGNORE INTO formulario (id, nombre, correo, edad) VALUES (3,'nombre3','test3@test.cl',26);


