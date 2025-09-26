import { object, string } from "zod";

export const ContactSchema = object({
  name: string().min(6, "Name must be at least 6 characters long"),
  email: string()
    .min(6, "Email at least 6 characters")
    .email("Invalid email address"),
  subject: string().min(5, "Subject must be at least 5 characters long"),
  message: string()
    .min(10, "Message must be at least 10 characters long")
    .max(300, "Message must be at most 300 characters long"),
});
