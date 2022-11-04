import { toast } from '@zerodevx/svelte-toast'

export const Toast = m => toast.push(m, {
  pausable: true,
  duration: 6000,
  theme: {
    "--toastBorderRadius": "10px",
    "--toastWidth": "21.5rem",
    "--toastBarHeight": "2.5px",
    "--toastBarBackground": "var(--neutral)"
  }
})
