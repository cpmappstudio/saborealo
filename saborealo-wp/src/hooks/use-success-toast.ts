"use client"

import { useEffect, useRef } from "react"
import { toast } from "sonner"

import {
  SUCCESS_TOAST_QUERY_VALUE,
  type SuccessToastConfig,
} from "@/lib/form-success-toast"

export function useSuccessToast({
  description,
  queryParam,
  title,
}: SuccessToastConfig) {
  const didShowToast = useRef(false)

  useEffect(() => {
    if (didShowToast.current) {
      return
    }

    const currentUrl = new URL(window.location.href)

    if (currentUrl.searchParams.get(queryParam) !== SUCCESS_TOAST_QUERY_VALUE) {
      return
    }

    didShowToast.current = true

    toast.success(title, {
      description,
      duration: 5000,
    })

    currentUrl.searchParams.delete(queryParam)

    const search = currentUrl.searchParams.toString()
    const nextUrl = `${currentUrl.pathname}${search ? `?${search}` : ""}${currentUrl.hash}`

    window.history.replaceState(window.history.state, "", nextUrl)
  }, [description, queryParam, title])
}
