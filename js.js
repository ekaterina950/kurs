<script type="text/javascript">
  let btn = document.getElementById("btn");
  let spans = document.getElementsByTagName("span");

  btn.onclick = function(){
    for(span of spans){
      span.classList.add("anim");
    }
    setTimeout(function(){
      for(span of spans){
        span.classList.remove("anim");
      }
    },500)
  }
</script>

<script type="text/javascript">
  let more = document.querySelectorAll('.more');
  for(let i = 0;i<more.length;i++){
    more[i].addEventListener('click',function(){
      more[i].parentNode.classList.toggle('active')
    })
  }
</script>
