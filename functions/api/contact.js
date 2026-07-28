form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        message: form.message.value
    };

    const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        form.classList.add("hidden");
        successBox.classList.remove("hidden");
    } else {
        alert("Something went wrong.");
    }
});