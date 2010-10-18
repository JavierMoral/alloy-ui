AUI.add("aui-datatype",function(C){var I=C.Lang,H="false",E="true",G=C.namespace("DataType.Boolean"),K=C.namespace("DataType.String");G.parse=function(A){A=C.Lang.trim(A);return(A==H)?false:!!A;};K.evaluate=function(O){var A=C.Lang.trim(O);if(A==E||A==H){return G.parse(O);}if(A&&I.isString(A)){var L=+A;if(!isNaN(L)){return L;}}return O;};var I=C.Lang,F=C.Lang.String,N=I.isDate,J=I.isValue,D=":",B="am",M="pm";C.namespace("DataType.DateMath");C.mix(C.DataType.DateMath,{DAY:"D",WEEK:"W",YEAR:"Y",MONTH:"M",MINUTES:"MINUTES",HOUR:"HOUR",SECONDS:"SECONDS",MAX_MONTH_LENGTH:31,WEEK_LENGTH:7,ONE_DAY_MS:1000*60*60*24,ONE_HOUR_MS:1000*60*60,ONE_MINUTE_MS:1000*60,ONE_SECOND_MS:1000,WEEK_ONE_JAN_DATE:1,add:function(A,R,O){var Q=new Date(A.getTime());switch(R){case this.MONTH:var U=A.getMonth()+O;var P=0;if(U<0){while(U<0){U+=12;P-=1;}}else{if(U>11){while(U>11){U-=12;P+=1;}}}Q.setMonth(U);Q.setFullYear(A.getFullYear()+P);break;case this.DAY:this._addDays(Q,O);break;case this.YEAR:Q.setFullYear(A.getFullYear()+O);break;case this.WEEK:this._addDays(Q,(O*7));break;case this.HOUR:var S=Q.getHours();Q.setHours(S+O);break;case this.MINUTES:var L=Q.getMinutes();Q.setMinutes(L+O);break;case this.SECONDS:var T=Q.getSeconds();Q.setSeconds(T+O);break;}return Q;},_addDays:function(P,O){if(C.UA.webkit&&C.UA.webkit<420){if(O<0){for(var L=-128;O<L;O-=L){P.setDate(P.getDate()+L);}}else{for(var A=96;O>A;O-=A){P.setDate(P.getDate()+A);}}}P.setDate(P.getDate()+O);},compare:function(L,A){return(L&&A&&(L.getTime()==A.getTime()));},copyHours:function(O,L){var A=this;O.setHours(L.getHours());O.setMinutes(L.getMinutes());O.setSeconds(L.getSeconds());O.setMilliseconds(L.getMilliseconds());},subtract:function(A,O,L){return this.add(A,O,(L*-1));},before:function(O,L){var A=L.getTime();if(O.getTime()<A){return true;}else{return false;}},after:function(O,L){var A=L.getTime();if(O.getTime()>A){return true;}else{return false;}},between:function(L,A,O){if(this.after(L,A)&&this.before(L,O)){return true;}else{return false;}},getJan1:function(A){return this.getDate(A,0,1);},getDayOffsetYear:function(A,O){var L=this.getJan1(O);return this.getDayOffset(A,L,O);},getDayOffset:function(L,A){return this._absCeil(this.getOffset(L,A,this.ONE_DAY_MS));},getHoursOffset:function(L,A){return this._absFloor(this.getOffset(L,A,this.ONE_HOUR_MS));},getMinutesOffset:function(L,A){return this._absFloor(this.getOffset(L,A,this.ONE_MINUTE_MS));},getSecondsOffset:function(L,A){return this._absFloor(this.getOffset(L,A,this.ONE_SECOND_MS));},getOffset:function(O,L,A){var P=(O.getTime()-L.getTime())/(A||0);return P;},_absFloor:function(L){var A=Math.floor(Math.abs(L));if(L<0){A*=-1;}return A;},_absCeil:function(L){var A=Math.ceil(Math.abs(L));if(L<0){A*=-1;}return A;},getWeekNumber:function(Q,L,T){L=L||0;T=T||this.WEEK_ONE_JAN_DATE;var U=this.clearTime(Q),Y,Z;if(U.getDay()===L){Y=U;}else{Y=this.getFirstDayOfWeek(U,L);}var V=Y.getFullYear(),O=Y.getTime();Z=new Date(Y.getTime()+6*this.ONE_DAY_MS);var S;if(V!==Z.getFullYear()&&Z.getDate()>=T){S=1;}else{var R=this.clearTime(this.getDate(V,0,T)),A=this.getFirstDayOfWeek(R,L);var W=Math.round((U.getTime()-A.getTime())/this.ONE_DAY_MS);var X=W%7;var P=(W-X)/7;S=P+1;}return S;},getFirstDayOfWeek:function(P,A){A=A||0;var L=P.getDay(),O=(L-A+7)%7;return this.subtract(P,this.DAY,O);},isWeekDay:function(L){var A=L.getDay();return(A>0)&&(A<6);},isTueOrThu:function(A){return this.isWeekDay(A)&&(A.getDay()%2===0);},isMonWedOrFri:function(A){return this.isWeekDay(A)&&!this.isTueOrThu(A);},isDayOverlap:function(L,A){return((L.getFullYear()!==A.getFullYear())||(L.getMonth()!==A.getMonth())||(L.getDate()!==A.getDate()));},isToday:function(A){return !this.isDayOverlap(A,new Date());},isSameMonth:function(L,A){return((L.getFullYear()===A.getFullYear())&&(L.getMonth()===A.getMonth()));},isYearOverlapWeek:function(A){var O=false;var L=this.add(A,this.DAY,6);if(L.getFullYear()!=A.getFullYear()){O=true;}return O;},isMonthOverlapWeek:function(A){var O=false;var L=this.add(A,this.DAY,6);if(L.getMonth()!=A.getMonth()){O=true;}return O;},findMonthStart:function(A){var L=this.getDate(A.getFullYear(),A.getMonth(),1);return L;},findMonthEnd:function(L){var P=this.findMonthStart(L);var O=this.add(P,this.MONTH,1);var A=this.subtract(O,this.DAY,1);return A;},clearTime:function(A){A.setHours(12,0,0,0);return A;},safeClearTime:function(A){return this.clearTime(this.clone(A));},clone:function(A){return new Date(A.getTime());},getDate:function(P,A,O){var L=null;if(!J(O)){O=1;}if(P>=100){L=new Date(P,A,O);}else{L=new Date();L.setFullYear(P);L.setMonth(A);L.setDate(O);L.setHours(0,0,0,0);}return L;},getDaysInMonth:function(A,L){return this.findMonthEnd(this.getDate(A,L)).getDate();},toUsTimeString:function(O,T,Q,S){O=N(O)?O:new Date(0,0,0,O);var L=O.getHours();var P=O.getMinutes();var A=false;if(L>12){A=true;L-=12;}if(L===0){L=12;}var R=T?F.padNumber(L,2):String(L);if(!Q){R+=D;R+=F.padNumber(P,2);}if(!S){R+=(A?M:B);}return R;},toIsoTimeString:function(O,L){O=N(O)?O:new Date(0,0,0,O);var A=O.getHours();var P=O.getMinutes();var Q=F.padNumber(A,2)+D+F.padNumber(P,2);if(L){var R=O.getSeconds();Q+=D;Q+=F.padNumber(R,2);}return Q;}});},"@VERSION@",{skinnable:false,requires:["aui-base"]});