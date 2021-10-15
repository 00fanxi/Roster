let starter = []
let sc = []
let sr = []




function getstarter(){
	starter.splice(0,27);
	sc.splice(0,27);
	sr.splice(0,27);
	var i =0;
	while(i < 7){
		var h = 0;
		while(h<4){
			starter.push(document.querySelector('.table'+i+' .row'+h).value);
			sc.push(i);
			sr.push(h);
			h = h+1;
		}
		i=i+1;
	}
}

function autocheck(){
	//일단 다 지우고 시작
	var b = 0;
	while(b<12){
		document.querySelector('.n'+b+' .times').style.backgroundColor = '#be9c91'
		b=b+1;
	}
	//명단에 있는 근무자의 총 수를 구한다.
	var i = 0;
	var t = 0;
	while(i<12){
		if(document.querySelector('.name'+i).value !=''){
			t=t+1;
		}
		i=i+1;
	}
	//근무자가 있는 근무수 칸의 값을 다 더한다.
	var f = 0;
	var a = 0;
	while(f<12){
		if(document.querySelector('.name'+f).value !=''){
			a=a+Math.floor(document.querySelector('.n'+f+' .times').value);
		}
		f=f+1;
	}
	//근무표에 내용이 있는 칸이 있으면 개당 1씩 근무수 총합에 다시 더한다.
	var c=0;
	while(c<7){
		var r=0;
		while(r<4){
			if(document.querySelector('.table'+c+' .row'+r).value!=""){
				a=a+1;
			}
		r=r+1;
		}
	c=c+1;
	}
	//근무수 총합이 28일 경우 녹색, 그렇지 않을 경우 홍색을 근무자가 있는 근무수 칸에 칠한다.
	if(a==28){
		var i=0;
		while(i<12){
			if(document.querySelector('.name'+i).value !=''){
				document.querySelector('.n'+i+' .times').style.backgroundColor='green';
			}
			i=i+1;
		}
	}else{
		var i=0;
		while(i<12){
			if(document.querySelector('.name'+i).value !=''){
				document.querySelector('.n'+i+' .times').style.backgroundColor='red';
			}
			i=i+1;
		}
	}
}

function autocount(){
	var b = 0;
	while(b<12){
		document.querySelector('.n'+b+' .times').value =''
		b=b+1;
	}
	
	var i = 0;
	var t = 0;
	while(i<12){
		if(document.querySelector('.name'+i).value !=''){
			t=t+1;
		}
		i=i+1;
	}
	
	var h = 0;
	while(h<12){
		if(document.querySelector('.name'+h).value!=''){
			document.querySelector('.n'+h+' .times').value=Math.floor(28/t)
		}
		h=h+1;
	}
	
	var d = 11
	var j = 28-t*Math.floor(28/t);
	var g = 0;
	while(g<j){
		if(document.querySelector('.name'+d).value != ''){
			document.querySelector('.n'+d+' .times').value=Math.floor(document.querySelector('.n'+d+' .times').value)+1;
			g=g+1;
		}
		d=d-1;
	}
	
	//이미 수동으로 근무표에 적혀진 이름이 있으면 각 이름의 times에서 그 출현 횟수 만큼 뺀다.
	var c=0;
	while(c<7){
		var r=0;
		while(r<4){
			if(document.querySelector('.table'+c+' .row'+r).value!=""){
				var u = 0;
				while(u<12){
					if(document.querySelector('.name'+u).value==document.querySelector('.table'+c+' .row'+r).value){
						document.querySelector('.n'+u+' .times').value=Math.floor(document.querySelector('.n'+u+' .times').value)-1;
					}
				u = u+1;
				}
			}
		r=r+1;
		}
	c=c+1;
	}
}

function deletenames(){
	var i = 0;
	while(i<12){
		document.querySelector('.name'+i).value=''
		i=i+1;
	}
}

function deletetimes(){
	var b = 0;
	while(b<12){
		document.querySelector('.n'+b+' .times').value =''
		b=b+1;
	}
}

function deleteroster2(){
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
	
	var i = 0;
	while(i<28){
		if(starter[i]==''){
		}else{
			document.querySelector('.table'+sc[i]+' .row'+sr[i]).value=starter[i];
		}
		i=i+1;
	}
		
}

function deleteroster1(){
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
	
function finalcheck(){
	var final =[]
	var p = 0;
	var j = 0;
	while(p<12){
		var i =0;
		while(i < 7){
			var h = 0;
			while(h<4){
				final.push(document.querySelector('.table'+i+' .row'+h).value);
				h = h+1;
			}
			i=i+1;
		}
		while(final.indexOf(document.querySelector('.name'+p).value)==-1){
			final.splice(final.indexOf(document.querySelector('.name'+p).value),1);
			j=j+1
		}
		if(document.querySelector('.name'+p).value!=''){
			if(document.querySelector('.n'+p+' .times').value!=j){
				alert('작성하신 근무 수와 랜덤으로 배정')
			}
		}
		
	}
	
}
//////////////////////////////////////////////////////////////////



function get(){
	var cant = 0;
	var terminate = 0;
	//make roster버튼을 누르기전에 이미 테이블에 배치된 이름을 고정시키기 위해 starter를 만든다.
	var starter = []
	var i =0;
	while(i < 7){
		var h = 0;
		while(h<4){
			starter.push(document.querySelector('.table'+i+' .row'+h).value)
			h = h+1;
		}
		i=i+1;
	}
	
	while(terminate<1){
		if(cant==1500){
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
				var namelist = [];
				var i = 0
				while(i<12){
					namelist.push(document.querySelector('.name'+i).value);
					i=i+1;
				}
				while(namelist.indexOf("") != -1){
				namelist.splice(namelist.indexOf(""),1);  
				}
				
				//그전에 체크 박스에 체크되어 있으면 옵션으로 2~3번까지 중복 허용
				if(document.querySelector('#double').checked){
					var i = 0;
					var k = 0;
					while(i<7){
						if(namelist.indexOf(document.querySelector('.table'+i+' .row'+r).value) !=-1){
							k=k+1;
								if(k>=Math.floor(document.querySelector('select').value)){
									namelist.splice(namelist.indexOf(document.querySelector('.table'+i+' .row'+r).value),1);
								}
							i=i+1;
						}else{
							i=i+1;
						}
					}
				}else{
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
					if(document.querySelector('.n'+i+' #date'+c).checked){
						if(namelist.indexOf(document.querySelector('.n'+i+' .name'+i).value)!=-1){
						namelist.splice(namelist.indexOf(document.querySelector('.n'+i+' .name'+i).value),1);
					  }
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
				if(document.querySelector('.table'+c+' .row'+r).value!=""){
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
	//만들어진 근무표의 모든 value를 가져와서 terminater 배열을 만든다.	
			var terminater = []
			var i =0;
			while(i < 7){
				var h = 0;
				while(h<4){
					terminater.push(document.querySelector('.table'+i+' .row'+h).value)
					h = h+1;
				}
				i=i+1;
			}
		//terminater 배열중 undefined가 있을 경우 starter를 제외하고 다지우고 다시한다.
		 if(terminater.indexOf('undefined') !=-1){
				var k = 0;
				while(k<7){
					var i = 0;
					while(i<4){
						if(document.querySelector('.table'+k+' .row'+i).value != ""){
							if(document.querySelector('.table'+k+' .row'+i).value != starter[i+(k*4)]){
									document.querySelector('.table'+k+' .row'+i).value =''
							}
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
	






	








