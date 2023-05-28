-- CreateTable
CREATE TABLE "Doctor" (
    "idcard" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "consultationroomname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "especialidadId" INTEGER,
    CONSTRAINT "Doctor_especialidadId_fkey" FOREIGN KEY ("especialidadId") REFERENCES "Especialidad" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Paciente" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "birthday" DATETIME NOT NULL,
    "number" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cita" (
    "idcita" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idespecialidad" INTEGER,
    "doctorIdcard" BIGINT,
    "pacienteId" BIGINT,
    CONSTRAINT "Cita_idespecialidad_fkey" FOREIGN KEY ("idespecialidad") REFERENCES "Especialidad" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cita_doctorIdcard_fkey" FOREIGN KEY ("doctorIdcard") REFERENCES "Doctor" ("idcard") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cita_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Especialidad" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_idcard_key" ON "Doctor"("idcard");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_id_key" ON "Paciente"("id");
