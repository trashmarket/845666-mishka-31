var index = 0;
var amount = 0;//amount of images
var currTransl = []
var translationComplete = true;
var reviews__containersAll = document.querySelectorAll('.reviews__container');
var reviews__wrapperWidth = document.querySelector('.reviews__wrapper').clientWidth;
var reviews__containers = document.querySelector('.reviews__containers');
var reviews__container = document.querySelector('.reviews__container');

var reviews__containerWidth = reviews__wrapperWidth * reviews__containersAll.length;
reviews__containers.style.width = `${reviews__containerWidth}px`;

console.log(reviews__containerWidth);
var transitionCompleted = function(){
    translationComplete = true;
}

document.addEventListener("DOMContentLoaded", function(event) 
{
    amount = reviews__containersAll.length;
    
    for(var i = 0; i < amount; i++)
    {
        currTransl[i] = -reviews__wrapperWidth;
        reviews__containersAll[i].addEventListener("transitionend", transitionCompleted, true);                    
        reviews__containersAll[i].addEventListener("webkitTransitionEnd", transitionCompleted, true);                    
        reviews__containersAll[i].addEventListener("oTransitionEnd", transitionCompleted, true);                    
        reviews__containersAll[i].addEventListener("MSTransitionEnd", transitionCompleted, true);
        
        reviews__containersAll[i].style.transform = `translate(${-reviews__wrapperWidth}px)`;
        reviews__containersAll[i].style.width = `${reviews__wrapperWidth}px`;
    }
    console.log("DOM fully loaded and parsed");
});

function right()
{
    if(translationComplete === true)
    {
        translationComplete = false;
        index--;
        if(index == -1)
        {
            index = amount-1;
        }
        var outerIndex = (index) % amount;
        for(var i = 0; i < amount; i++)
        {
            var container = reviews__containersAll[i];    
            container.style.opacity = '1';    
            container.style.transform = 'translate('+(currTransl[i] + reviews__wrapperWidth)+'px)';
            
            currTransl[i] = currTransl[i] + reviews__wrapperWidth;
        }
        
        var outerContainer = reviews__containersAll[outerIndex];
        outerContainer.style.transform = 'translate('+(currTransl[outerIndex]- reviews__wrapperWidth *(amount))+'px)';
        outerContainer.style.opacity = '0';
        currTransl[outerIndex] = currTransl[outerIndex]- reviews__wrapperWidth *(amount);
    }
}

function left()
{
    if(translationComplete === true)
    {
        translationComplete = false;
        index++;
        var outerIndex = (index-1) % amount;
        
        for(var i = 0; i < amount; i++)
        {
          var container = reviews__containersAll[i];    
          container.style.opacity = '1';    
          container.style.transform = 'translate('+(currTransl[i] - reviews__wrapperWidth)+'px)';
          currTransl[i] = currTransl[i] - reviews__wrapperWidth;
        }

        var outerContainer = reviews__containersAll[outerIndex];
        outerContainer.style.transform = 'translate('+(currTransl[outerIndex] + reviews__wrapperWidth * (amount))+'px)';
        outerContainer.style.opacity = '0';
        currTransl[outerIndex] = currTransl[outerIndex] + reviews__wrapperWidth * (amount);
    }
}