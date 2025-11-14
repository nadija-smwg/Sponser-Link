import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendUserData } from "./user";

export default function useAddUser() {
 const createMutation = useMutation({
    mutationFn: ({email,password})=>sendUserData({email,password}),
  })

  return createMutation;
}


 