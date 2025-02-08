import { date, z } from "zod";

export const createProductSchema = z.object({
  name: z.string({
    required_error: "El nombre del producto es obligatorio",
  }),
  description: z.string({
    required_error: "La descripcion es requerida",
  }),
  price: z.number({
    required_error: "El precio del producto es obligatorio",
  }),
  url_image: z.string({
    required_error: "Se requiere una url con una imagen del producto",
  }),
  stock: z.number({
    required_error: "Indica la cantidad en existencia",
  }),
  date: z.string().datetime().optional(),
});
