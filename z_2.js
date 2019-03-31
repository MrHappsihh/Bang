function days_if(){
    let remainder=document.getElementById("quantity").value % 7
     if (remainder==0){
         alert('Воскресенье')
     }
      else if (remainder==1){
          alert('Понедельник')
    }
      else if (remainder==2){
          alert('Вторник')
      }
      else if (remainder==3){
          alert('Среда')
      }
      else if (remainder==4){
          alert('Четверг')
      }
      else if (remainder==5){
          alert('Пятница')
      }
        else if (remainder==6){
            alert('Суббота')
        }
        else{
            alert('Введите корректное значение')
        }
}

function days_switch(){
    let remainder=document.getElementById("quantity").value % 7
     switch(remainder){
             case(0):
                alert('Воскресенье');
                break;
             case(1):
                alert('Понедельник');
                break;
             case(2):
                alert('Вторник');
                break;
             case(3):
                 alert('Среда');
                break;
             case(4):
                 alert('Четверг');
                break;
             case(5):
                 alert('Пятница');
                break;
             case(6):
                 alert('Суббота');
                break;
         default:
                 alert('Введите корректное значение');
     }  }   