<label for="<?php echo $id; ?>"><?php echo $label; ?></label>
<select name="<?php echo $id; ?>" id="<?php echo $id; ?>" class="form-control">
    <?php if(is_array($value)):
    foreach($value as $v):
    ?>
    <option value="<?php echo $v; ?>"><?php echo ucfirst($v); ?></option>
    <?php endforeach;  endif; ?>
</select>