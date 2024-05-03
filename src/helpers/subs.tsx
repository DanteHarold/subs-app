"use server";
import Sub from "@/data/models/sub.model";
import connectDB from "@/data/mongo/init";
interface Props {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  correo: string;
  terms: boolean;
}
export const saveSubs = async ({
  nombre,
  apellidoPaterno,
  apellidoMaterno,
  correo,
  terms,
}: Props) => {
  const sub = await Sub.create({
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    correo,
    terms,
  });

  await sub
    .save()
    .then((sub: any) => {
      console.log("Documento guardado exitosamente:", sub);
    })
    .catch((error: any) => {
      console.error("Error al guardar el documento:", error);
    });
};

export const getSubs = async () => {
  try {
    const subs = await Sub.find();
    console.log("Documentos:", subs);
    return subs;
  } catch (error: any) {
    console.error("Error al obtener documentos:", error);
  }
};

export const verifyEmail = async (
  correo: string
): Promise<boolean | undefined> => {
  try {
    const existente = await Sub.findOne({ correo });
    if (existente) return true;
    return false;
  } catch (error) {
    console.error("Error al Verificar Correo", error);
  }
};

export const conectar = async () => {
  await connectDB();
};
