<video
id="{{ $id }}"
class="video-js vjs-fluid vjs-16-9"
controls
preload="auto"
data-setup="{}"
>
<source src="{{ $src }}">
</video>

@isset($is_dash)
@if($is_dash == "true")
<script>
  var player = videojs('{{ $id }}');
  player.src({ src: '{{ $src }}', type: 'application/dash+xml'});
  player.play();
</script>
@endif
@endisset