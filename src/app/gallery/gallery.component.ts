import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements AfterViewInit {
  allMemes: {name: string, url: string }[] = [
  	{'name': 'mountain', 'url': 'assets/memes/meme_1.jpg'},
  	{'name': 'mountain', 'url': 'assets/memes/meme_2.jpg'},
  	{'name': 'mountain', 'url': 'assets/memes/meme_3.jpg'},
  	{'name': 'mountain', 'url': 'assets/memes/meme_4.jpg'},
  	{'name': 'mountain', 'url': 'assets/memes/meme_5.jpg'},
  	{'name': 'mountain', 'url': 'assets/memes/meme_6.jpg'}
  ]
  constructor() { }

  ngAfterViewInit() {
  	var popup = {
	  init: function(){
	    $('figure').click(function(){
	      popup.open($(this));
	    });
	    
	    $(document).on('click', '.popup img', function(){
	      return false;
	    }).on('click', '.popup', function(){
	      popup.close();
	    })
	  },
	  open: function($figure) {
	    $('.gallery').addClass('	');
	    let $popup = $('<div class="popup" />').appendTo($('body'));
	    let $fig = $figure.clone().appendTo($('.popup'));
	    let $bg = $('<div class="bg" />').appendTo($('.popup'));
	    let $close = $('<div class="close"><svg><use xlink:href="#close"></use></svg></div>').appendTo($fig);
	    let $shadow = $('<div class="shadow" />').appendTo($fig);
	    let src = $('img', $fig).attr('src');
	    $shadow.css({backgroundImage: 'url(' + src + ')'});
	   $bg.css({backgroundImage: 'url(' + src + ')'});
	    setTimeout(function(){
	      $('.popup').addClass('pop');
	    }, 10);
	  },
	  close: function(){
	    $('.gallery, .popup').removeClass('pop');
	    setTimeout(function(){
	      $('.popup').remove()
	    }, 100);
	  }
	}

popup.init()
  }

}
