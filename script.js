const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");
const nextBtn = document.getElementById("nextBtn"); // The new "Go to Next Page" button
const container = document.querySelector(".container");

yesBtn.addEventListener("click", function() {
    response.innerHTML = `YIPPEE<br>
    <pre>
     へ   ♡    /|、
 ૮ - .՛)      (\` -7
  /   |       |、⁻〵
 乀 (ˍ,ل ل       じしˍ,)ノ
    </pre>
    i sure am glad you didn't click no<br><br>`;
    
    // Show the next button after "Yes" is clicked
    nextBtn.style.display = "inline-block"; // Makes the button visible
});

nextBtn.addEventListener("click", function() {
    window.location.href = "chocolates.html"; // Redirect to chocolates.html
});

noBtn.addEventListener("mouseover", function() {
    const containerRect = container.getBoundingClientRect();
    const maxX = containerRect.width - noBtn.offsetWidth - 10;
    const maxY = containerRect.height - noBtn.offsetHeight - 10;

    const x = Math.min(Math.random() * maxX, maxX);
    const y = Math.min(Math.random() * maxY, maxY);

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener("click", function() {
    const maxX = container.clientWidth;
    const maxY = container.clientHeight;

    const randomX = (maxX + 500) - 6000; // Larger random offset to push it out
    const randomY = (maxY + 500) - 6000;

    noBtn.style.transition = "transform 0.5s ease-in-out"; // Fast 0.5s animation for moving the button
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`; 

    // Update response after the button flies out
    setTimeout(function() {
        response.innerHTML = `<br>every single time without fail I HATE YOUUUUU`;

        // Apply smooth resizing of the container after the response text
        container.style.transition = "height 0.2s ease-out, width 0.2s ease-out";
        container.style.height = "auto"; // Adjust the height to fit the new content
        container.style.width = "450px"; // Adjust the width if needed
    }, 500); // Update the message right after the button flies out
    nextBtn.style.display = "none";
});

