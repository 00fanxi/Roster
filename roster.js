var namelist = [];


function deleteall(){
	var k = 0;
	while(k<7){
		var i = 0;
		while(i<4){
			if(document.querySelector('.table'+k+' .row'+i).value != ''){
				document.querySelector('.table'+k+' .row'+i).value =''
			}else{
			}
			i=i+1;	
		}
		k=k+1;
	}
		
}

function timeget(){
	var timelist = []
	var i=0;
	while(i<12){
		if(document.querySelector('.n'+i+' .times').value==''){
		}else{
			var h = 0;
			while(h<document.querySelector('.n'+i+' .times').value){
				timelist.push(document.querySelector('.name'+i).value)
				h=h+1;
			}
		}
		i=i+1;
	}
	
}

function get(){
	var cant = 0;
	var terminate = 0;

	while(terminate<1){
		if(cant==100){
			terminate = 1;
			alert('해당 인원으로는 조건을 만족하는 근무표 생성이 불가능 합니다.')
		}
		//근무 횟수만큼 이름을 배열에 넣는다
		var timelist = []
		var i=0;
		while(i<12){
			if(document.querySelector('.n'+i+' .times').value==''){
		  }else{
				var h = 0;
				while(h<document.querySelector('.n'+i+' .times').value){
					timelist.push(document.querySelector('.name'+i).value)
					h=h+1;
				}
			}
			i=i+1;
		}
	
		//c는 열의 변수
		var c = 0;
		while(c<7){
			//r는 행의 변수
			var r = 0;
			while(r<4){
				//명단에서 이름 가져와서 namelist 완성
				var i = 0
				while(i<12){
					namelist.push(document.querySelector('.name'+i).value);
					i=i+1;
				}
				while(namelist.indexOf("") != -1){
				namelist.splice(namelist.indexOf(""),1);  
				}
				//namelist에서 같은 행의 이름 제거
				var i = 0;
				while(i<7){
					if(namelist.indexOf(document.querySelector('.table'+i+' .row'+r).value) !=-1){
						namelist.splice(namelist.indexOf(document.querySelector('.table'+i+' .row'+r).value),1);
						i=i+1;
					}else{
						i=i+1;
					}
				}
				//namelist에서 같은 열의 이름 제거
				var i = 0;
				while(i<4){
					if(namelist.indexOf(document.querySelector('.table'+c+' .row'+i).value)!=-1){
						namelist.splice(namelist.indexOf(document.querySelector('.table'+c+' .row'+i).value),1);
						i=i+1;
					}else{
						i=i+1;
					}
				}
				//namelist에서 야간2직 다음 주간1,2직제외
				if(c!=0){
					var h=c-1;
					if(r==0 || r==1){
						if(namelist.indexOf(document.querySelector('.table'+h+' .row3').value)!=-1){
							namelist.splice(namelist.indexOf(document.querySelector('.table'+h+' .row3').value),1);
						}
					}
				}
				//namelist에서 근무 열외 요일 체크된 이름 제외
				var i =0;
				while(i<12){
					var h = 0;
					while(h<7){
						if(document.querySelector('.n'+i+' #date'+h).checked){
							if(namelist.indexOf(document.querySelector('.n'+i+' .name'+i).value)!=-1){
							namelist.splice(namelist.indexOf(document.querySelector('.n'+i+' .name'+i).value),1);
							}
						}
						h = h + 1;
					}
					i=i+1;
				}
				//namelist에서 timelist에 이름이 없는 사람들 제거
				if(namelist!=[]){
						var i = 0;
						var k = 0;
						var h = namelist.length;
						while(k<h){
							if(timelist.indexOf(namelist[i])!=-1){	 
								i=i+1;
								k=k+1;
							}else{
								namelist.splice(namelist.indexOf(namelist[i]),1);
								k=k+1;
							}
						}
					}
				//table에 이미 이름이 작성되있는칸을 제외하고 
				//위에서 만들어진 namelist에서 랜덤으로 이름을 해당table에 넣는다.
				if(document.querySelector('.table'+c+' .row'+r).value==""){
				}else{
					var ran = namelist[Math.floor(Math.random()*namelist.length)]
					document.querySelector('.table'+c+' .row'+r).value=ran;
					//timelist에서 선택된 이름을 한번 뺀다
					timelist.splice(timelist.indexOf(ran),1);
				}
				//namelist에 계속 원소가 쌓이는 오류를 방지하기 위해 namelist 초기화
				namelist.splice(0,namelist.length);

				r = r+1;
			}
			c = c+1;
		}
			var terminater = []
			var i =0;
		//만들어진 근무표의 모든 value를 가져와서 terminater 배열을 만든다.	
			while(i < 7){
				var h = 0;
				while(h<4){
					terminater.push(document.querySelector('.table'+i+' .row'+h).value)
					h = h+1;
				}
				i=i+1;
			}
		//terminater 배열중 undefined가 있을 경우 다지우고 다시한다.
			if(terminater.indexOf('undefined') !=-1){
				var k = 0;
				while(k<7){
					var i = 0;
					while(i<4){
						if(document.querySelector('.table'+k+' .row'+i).value != ''){
							document.querySelector('.table'+k+' .row'+i).value =''
						}else{
						}
						i=i+1;	
					}
					k=k+1;
				}
				cant = cant + 1;
			}else{
				terminate = terminate + 1;
		}
		
		
		
	}
}
	






	








