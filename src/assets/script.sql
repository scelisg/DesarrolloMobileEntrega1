CREATE TABLE IF NOT EXISTS formulario(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    correo TEXT
);

INSERT OR IGNORE INTO formulario (id, nombre, correo) VALUES (1,'nombre1','test1@test.cl');
INSERT OR IGNORE INTO formulario (id, nombre, correo) VALUES (2,'nombre2','test2@test.cl');
INSERT OR IGNORE INTO formulario (id, nombre, correo) VALUES (3,'nombre3','test3@test.cl');



