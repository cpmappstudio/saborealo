import type { SuccessToastConfig } from "@/lib/form-success-toast"
import { useSuccessToast } from "@/hooks/use-success-toast"

type SuccessToastTriggerProps = {
  config: SuccessToastConfig
}

export function SuccessToastTrigger({ config }: SuccessToastTriggerProps) {
  useSuccessToast(config)
  return null
}
