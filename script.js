document.addEventListener("DOMContentLoaded", function () {
    const file_input = document.getElementById("csv_file_input");
    const json_output = document.getElementById("json_output");
    const copy_button = document.getElementById("copy_button");
    const json_title = document.getElementById("json_title");
    const download_button = document.getElementById("download_button");

    file_input.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (event) {
            const csv_text = event.target.result;

            const parsed = Papa.parse(csv_text, {
                header: true,
                skipEmptyLines: true,
                dynamicTyping: true
            });

            const json = JSON.stringify({ data: parsed.data }, null, 2);

            json_output.textContent = json;
            json_title.style.display = "block";
            copy_button.style.display = "inline-block";
            download_button.style.display = "inline-block";
        };

        reader.readAsText(file);
    });

    copy_button.addEventListener("click", function () {
        const jsonData = json_output.textContent; 

        navigator.clipboard.writeText(jsonData)
            .then(() => {
                alert("JSON copied to clipboard!");
            })
            .catch(err => {
                console.error("Failed to copy text: ", err);
            });
    });

    download_button.addEventListener("click", () => {
        const json_data = json_output.textContent;
        const blob = new Blob([json_data], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "data.json";
        a.click();

        URL.revokeObjectURL(url);
    });
});
