������T��w���>�����U���!^P�chMg|RЪM<J�j9^(p?�C����"P��̪�Z�Wa��0���zC�-�����&�3pLl�5���fCU}R��^3s# Ξ���8�����od�y#��.�9ð>�6G��Ll�%���};�%Ȱs����#��$1K���)K��������-�r~����/����0�������ow'��x7R��B����{�M` u�C}Ƌ%����?|��]ǘu�H�%�γ������z�,�G��μ¹À ��T���2�\��v����b�e�b2��Yp1��:u���g�յ�IV{��X��*ZZ���؆Z؉a�LK���УGE��e�+G�aR��V)l�OE�Wݐa�ٱ2���:��I-�X���7g9�6�н��+�f���*|�1�Z����(��0��G��;~�-x�����,���0k��(>0);��P_%-�X+T�$�q�6�h���BDKb�+�E�'��0
�nt����YBt���-�#����t��	K`���Š� ��w�{Z7<%v�w�@
�n+�Oe&T3�
 �gW�Գ����S��Ӹ&؝͙ЖI����]��WĿV��e�V���UEj��r` ҵ��t�֚���(�5��_}q��:��}��m���槻�8+�����1�� O#�]�	Ս��L���Pӯ�S���]�x����&��Q�2�r�W].�2u&��� �JK6ZT��yV[ŸO�CYt>�������+҆�1��\�9]����k�L���8znF"]���U�[���=_��Ć,R���/ę��L��<Eh��40@�
E,���g>� [�>��0�e�b�>����5[��}�ݦ�Ny�����%jIn�����\�+ɯ�����n���uv��~��e5`�OiľH��oI�uȎ�_�}fߥq���é�*��Y�eW���gA�.ӫ��G`�� ��o6���|ڜ�7�|�6���g�Jv�??����+n:i����Prh�����@޳:��x	��8}x{�������uJ�-:Ľ��v�s���a�4=��_a���0����~�5��Q�(m�2?�w8D��ê�_�w�����]���\�K�7�ͯ������� YKN��H���ͧr��(ۗ-�4�O�!?K0<�����momŽ��no���m�?[��	�                                                                                                                                                                                                                                                                                                                    ($alert.hasClass('in'), false, 'remove .in class on .close click')
  })

  QUnit.test('should remove element when clicking .close', function (assert) {
    assert.expect(2)
    var alertHTML = '<div class="alert alert-danger fade in">'
        + '<a class="close" href="#" data-dismiss="alert">×</a>'
        + '<p><strong>Holy guacamole!</strong> Best check yo self, you\'re not looking too good.</p>'
        + '</div>'
    var $alert = $(alertHTML).appendTo('#qunit-fixture').bootstrapAlert()

    assert.notEqual($('#qunit-fixture').find('.alert').length, 0, 'element added to dom')

    $alert.find('.close').trigger('click')

    assert.strictEqual($('#qunit-fixture').find('.alert').length, 0, 'element removed from dom')
  })

  QUnit.test('should not fire closed when close is prevented', function (assert) {
    assert.expect(1)
    var done = assert.async()
    $('<div class="alert"/>')
      .on('close.bs.alert', function (e) {
        e.preventDefault()
        assert.ok(true, 'close event fired')
        done()
      })
      .on('closed.bs.alert', function () {
        assert.ok(false, 'closed event fired')
      })
      .bootstrapAlert('close')
  })

})
