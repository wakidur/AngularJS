/**
 * ng-weather
 * @version v0.0.1 - 2013-11-26
 * @link https://github.com/asafdav/ng-weather
 * @author Asaf David <>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"use strict";angular.module("asafdav.ngWeather",[]).value("apiEndpoint","http://api.openweathermap.org/data/2.5/weather").value("iconEndpoint","http://openweathermap.org/img/w/").service("weatherService",["$http","$q","apiEndpoint","iconEndpoint",function(a,b,c,d){function e(a){this.data=a,this.getTemperature=function(){return this.data&&this.data.main?this.data.main.temp:null},this.getMinTemperature=function(){return this.data&&this.data.main?this.data.main.temp_min:null},this.getMaxTemperature=function(){return this.data&&this.data.main?this.data.main.temp_max:null},this.getIconCode=function(){return this.data&&this.data.weather&&this.data.weather[0]?this.data.weather[0].icon:null},this.getIcon=function(){return d+this.getIconCode()+".png"}}this.q=function(d,f){var g=b.defer();f="undefined"!=typeof f?f:"metric";var h=c+"?q="+d+"&units="+f+"&callback=JSON_CALLBACK";return a.jsonp(h).success(function(a){g.resolve(new e(a))}).error(function(a){g.reject(a)}),g.promise}}]).directive("cityWeather",["weatherService",function(a){return{scope:{cityWeather:"&"},restrict:"A",template:'<div class="weather-widget"><h1>Temperature in {{city}} <img ng-src="{{weather.getIcon()}}" /></h1><h3>Current: {{weather.getTemperature()}}&deg;C</h3><h4>Min: {{weather.getMinTemperature()}}&deg;C, Max: {{weather.getMaxTemperature()}}&deg;C </h4></div>',link:function(b){b.$watch("cityWeather",function(){b.city=b.$eval(b.cityWeather),a.q(b.city).then(function(a){b.weather=a},function(){b.weather=null})})}}}]);