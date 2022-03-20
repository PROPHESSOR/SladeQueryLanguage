# (G)SQL - (G)Slade Query Language

## Query Structure

- `SELECT <subject> [WHERE <conditions>]` - Select subjects
- `DESELECT <subject> [WHERE <conditions>]` - Deselect subjects
- `UPDATE <subject> SET <key>=<value> [...<key>=<value>] [WHERE <conditions>]` - Change properties
- `DELETE <subject> [WHERE <conditions>]` - Delete subjects

Operators are case-insensitive, so you can type `SELECT`, `select`, `SeLeCt` or any variation.
Property values are case-sensitive, so `UPDATE lines SET textureTop1=Flat02` will set front upper texture to `Flat02`, not `FLAT02`.

### Subjects

- vertexes
- lines
- sectors
- things

### Conditions

Conditions have the following format: `<key>=<value>` and can be combined with `AND`, `OR` and `NOT` operators.

For example, `SELECT vertexes WHERE x=32 OR x=64 OR x=128` or `DELETE things WHERE x=32 AND y=64`
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
- delete things where not type=1
- delete sectors where textureFloor=- and textureCeiling=-

### COUNT

- count things where type=1
- count lines

## TODO

- [ ] Support for `OR` & `AND` operators in `WHERE` block
