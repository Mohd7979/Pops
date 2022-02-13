<script>
const $confirm = (text, buttonColor) =&gt; { 
    return new Promise((resolve) =&gt; {
    
    var as_background = document.createElement(&#39;div&#39;);
    var as_box = document.createElement(&#39;div&#39;);
    var as_contentWrapper = document.createElement(&#39;div&#39;);
    var as_textnode = document.createElement(&#39;div&#39;);
    var as_okButton = document.createElement(&#39;button&#39;);
    var as_cancelButton = document.createElement(&#39;button&#39;);
    var as_buttonSection = document.createElement(&#39;div&#39;);

    as_okButton.innerText = &#39;Haye&#39;;
    as_textnode.innerText = text;

    as_box.classList.add(&quot;as-box&quot;);
    as_background.classList.add(&quot;as-background&quot;);

    as_okButton.classList.add(&quot;as-okButton&quot;);
    as_okButton.setAttribute(&quot;id&quot;,&quot;as-okButton&quot;);
    as_cancelButton.classList.add(&quot;as-cancelButton&quot;);

    as_textnode.classList.add(&quot;as-textnode&quot;);
    as_buttonSection.classList.add(&quot;as-buttonSection&quot;);
    as_contentWrapper.classList.add(&quot;as-contentWrapper&quot;);


    as_box.style.backgroundColor = &#39;#fff&#39;;
    as_okButton.style.backgroundColor = buttonColor || &#39;#5AB9EA&#39;;
    as_okButton.style.color =  &#39;#fff&#39;;
    as_textnode.style.color = &#39;#666666&#39;;


    as_box.appendChild(as_contentWrapper);
    as_contentWrapper.appendChild(as_textnode);
    as_contentWrapper.appendChild(as_buttonSection);
    as_buttonSection.appendChild(as_cancelButton);
    as_buttonSection.appendChild(as_okButton);
    as_background.appendChild(as_box);

    document.body.appendChild(as_background);

    var style = document.createElement(&#39;style&#39;);

    style.setAttribute(&quot;type&quot;,&quot;text/css&quot;);
    style.setAttribute(&quot;id&quot;,&quot;as_style_alertConfirm&quot;);

    style.innerHTML =
    `.as-box{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 300px;
        border: 0px solid;
        border-radius: 5px; 
        padding: 20px;

        user-select: none;
        -ms-user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -webkit-touch-callout: none;
    }

    .as-background{
        position: fixed;
        width: 100%;
        height: 100%;

        top: 0;
        left: 0; 
    
        background-color: rgba(0, 0, 0, 0.425);
        font-family: &#39;Heebo&#39;, sans-serif;
        z-index: 100000;  
    }

    .as-textnode{
        max-height: 500px;
        overflow-y: auto;
        font-size: 17px;
        word-wrap: break-word;
        line-height: 1.5;
        padding-right: 20px;
    }
    .as-textnode::-webkit-scrollbar{
        width: 5px;
    }
    .as-textnode::-webkit-scrollbar-thumb{
        background-color: #D5D8DC;
        border-radius: 10px;
    }

    .as-textnode{
        scrollbar-color: #D5D8DC;
        scrollbar-width: thin;
    }

    .as-okButton{
        border: 0px solid;
        border-radius: 3px;
        padding: 7px 9px;
        outline: none;
        font-size: 14px;
        cursor: pointer;
    }
    .as-cancelButton{
        border: 0px solid;
        border-radius: 3px;
        padding: 7px 9px;
        outline: none;
        font-size: 14px;
        cursor: pointer;
        background-color: #fff;
        color: #666666;
        margin-right: 5px;
    }
    .as-buttonSection{
        padding-top: 10px;
        display: flex;
        justify-content: flex-end;
    }

    @media only screen and (max-width: 576px) {
        .as-box {
            width: calc(100% - 30%);
        }
      }

    .as-box{animation:mymove 800ms;}
    @keyframes mymove{0% {opacity: 60%}

    .as-background{animation:fadein 800ms}
    @keyframes fadein{0% {opacity: 60%}`;
    
    document.head.appendChild(style);

    as_okButton.addEventListener(&#39;click&#39;, ()=&gt;{
        asOkay();

        const back = true;
        if(back == true){
            resolve();
        };
    });

    as_cancelButton.addEventListener(&#39;click&#39;, ()=&gt;{
        asCancel();
    });

    
    function asOkay(){
        let as_style_alertConfirm = document.getElementById(&quot;as_style_alertConfirm&quot;);
        as_style_alertConfirm.remove();
        as_background.remove();
    };

    function asCancel(){
        let as_style_alertConfirm = document.getElementById(&quot;as_style_alertConfirm&quot;);
        as_style_alertConfirm.remove();
        as_background.remove();
    };

    });
 };



function $alert(text, buttonColor){

    var as_background = document.createElement(&#39;div&#39;);
    var as_box = document.createElement(&#39;div&#39;);
    var as_contentWrapper = document.createElement(&#39;div&#39;);
    var as_textnode = document.createElement(&#39;div&#39;);
    var as_button = document.createElement(&#39;button&#39;);
    var as_buttonSection = document.createElement(&#39;div&#39;);


    as_button.innerText = &#39;Haye&#39;;
    as_textnode.innerText = text;


    as_box.classList.add(&quot;as-box&quot;);
    as_background.classList.add(&quot;as-background&quot;);
    as_button.classList.add(&quot;as-button&quot;);
    as_textnode.classList.add(&quot;as-textnode&quot;);
    as_buttonSection.classList.add(&quot;as-buttonSection&quot;);
    as_contentWrapper.classList.add(&quot;as-contentWrapper&quot;);


    as_box.style.backgroundColor =  &#39;#fff&#39;;
    as_button.style.backgroundColor = buttonColor || &#39;#5AB9EA&#39;;
    as_button.style.color = &#39;#fff&#39;;
    as_textnode.style.color = &#39;#666666&#39;;

    
    as_box.appendChild(as_contentWrapper);
    as_contentWrapper.appendChild(as_textnode);
    as_contentWrapper.appendChild(as_buttonSection);
    as_buttonSection.appendChild(as_button);
    as_background.appendChild(as_box);
    document.body.appendChild(as_background);

    var style = document.createElement(&#39;style&#39;);

    style.setAttribute(&quot;type&quot;,&quot;text/css&quot;);
    style.setAttribute(&quot;id&quot;,&quot;as_style_basicAlert&quot;);

    style.innerHTML =
    `.as-box{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 300px;
        border: 0px solid;
        border-radius: 5px; 
        padding: 20px;

        user-select: none;
        -ms-user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -webkit-touch-callout: none;
    }

    .as-background{
        position: fixed;
        width: 100%;
        height: 100%;

        top: 0;
        left: 0; 
    
        background-color: rgba(0, 0, 0, 0.425);
        font-family: &#39;Heebo&#39;, sans-serif;
        z-index: 100000;  
    }

    .as-textnode{
        max-height: 500px;
        overflow-y: auto;
        font-size: 17px;
        word-wrap: break-word;
        line-height: 1.5;
        padding-right: 10px;
    }
    .as-textnode::-webkit-scrollbar{
        width: 1px;
    }
    .as-textnode::-webkit-scrollbar-thumb{
        background-color: #D5D8DC;
        border-radius: 10px;
    }

    .as-textnode{
        scrollbar-color: #D5D8DC;
        scrollbar-width: thin;
    }

    .as-button{
        border: 0px solid;
        border-radius: 3px;
        padding: 7px 9px;
        outline: none;
        font-size: 14px;
        cursor: pointer;
    }
    .as-buttonSection{
        padding-top: 10px;
        display: flex;
        justify-content: flex-end;
    }

    @media only screen and (max-width: 576px) {
        .as-box {
            width: calc(100% - 30%);
        }
      }

    .as-box{animation:mymove 800ms;}
    @keyframes mymove{0% {opacity: 60%}

    .as-background{animation:fadein 800ms}
    @keyframes fadein{0% {opacity: 60%}`;
    
    document.head.appendChild(style);
 
    as_button.addEventListener(&#39;click&#39;, ()=&gt;{
        let as_style_basicAlert = document.getElementById(&quot;as_style_basicAlert&quot;);
        as_style_basicAlert.remove();
        as_background.remove();
    });
    
};
</script>
  
 <script type='text/javascript'>

    var myconfirm = document.getElementById(&quot;Welli&quot;)
    myconfirm.addEventListener(&quot;click&quot;, function(){
        $confirm(&quot;Kulankaan Ma Uusan Bilaaban!&quot;, &quot;#0B8043&quot;)
    })

</script> 