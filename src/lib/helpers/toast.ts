import toast from "svelte-french-toast";

export const Toast = (message: string) => {
	toast.success(message, {
		style: `background-color: rgba(var(--secondary-rgb), 0.2);
						color: var(--secondary);
						transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
						transition-property: background-color, color;
						transition-duration: 150ms;`,
		duration: 3500,
		position: "bottom-right"
	});
};
