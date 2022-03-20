## Query Examples

### SELECT (DESELECT)

- select lines where index=3
- select lines where id=3
- select lines where textureMiddle=FLAT10
- select vertexes where x=32 and y=10
- select things where x=32 or x=64
- deselect things

### UPDATE

- update lines set textureMiddle=FLAT09 where id=3
  - textureMiddle1 - front side, textureMiddle2 - back side, textureMiddle - both sides (any side)
- update lines set textureMiddle1=FLAT09 where textureMiddle2=FLAT09
- update things set type=16 y=10 where x=3
- update sectors set textureCeiling=FLAT12 where textureFloor=FLAT12

### DELETE

- delete things
- delete things where type=1
- delete sectors where textureFloor=- and textureCeiling=-

### COUNT

- count things where type=1
- count lines
