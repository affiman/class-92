function getScore()
{
    score=localStorage.getItem("score");
    document.getElementById("update").innerHTML=score;
}

function back()
{
    window.location="activity_1.html";
}