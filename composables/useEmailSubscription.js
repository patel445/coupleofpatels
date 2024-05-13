import { ref } from 'vue';

export function useEmailSubscription() {
    const email = ref("");
    const message = ref("");
    const isSuccess = ref(false);

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return re.test(email);
    }

    async function handleSubmit() {
        if (!validateEmail(email.value)) {
            message.value = "Please enter a valid email address.";
            isSuccess.value = false;
            clearMessage();
            return;
        }

        const formData = new FormData();
        formData.append("EMAIL", email.value);
        formData.append("b_1e1468d62c179bbf4bc57956b_918df152c6", "");

        try {
            const response = await fetch(
                "https://coupleofpatels.us22.list-manage.com/subscribe/post?u=1e1468d62c179bbf4bc57956b&amp;id=918df152c6&amp;f_id=000cc1e1f0",
                {
                    method: "POST",
                    body: formData,
                    mode: "no-cors",
                }
            );

            isSuccess.value = true;
            message.value = "Great news! You're on the list!";
        } catch (error) {
            isSuccess.value = false;
            message.value = "Oops! Something went wrong with your sign-up. Please try again!";
        }
        clearMessage();
    }

    function clearMessage() {
        setTimeout(() => {
            message.value = "";
            email.value = "";
        }, 10000);
    }

    return {
        email,
        message,
        isSuccess,
        handleSubmit
    };
}