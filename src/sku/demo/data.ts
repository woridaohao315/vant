export const skuData = {
  goods_id: '946755',
  quota: 15,
  quota_used: 0,
  start_sale_num: 10,
  goods_info: {
    title: '测试商品',
    picture:
      'https://img.yzcdn.cn/upload_files/2017/03/16/Fs_OMbSFPa183sBwvG_94llUYiLa.jpeg?imageView2/2/w/100/h/100/q/75/format/jpg',
    price: 1
  },
  sku: {
    price: '1.00',
    stock_num: 227,
    none_sku: false,
    hide_stock: false,
    collection_id: 2261,
    tree: [
      {
        k: '颜色',
        k_id: '1',
        v: [
          {
            id: '30349',
            name: '天蓝色',
            imgUrl:
              'https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'
          },
          {
            id: '1215',
            name: '白色'
          }
        ],
        k_s: 's1',
        count: 2
      },
      {
        k: '尺寸',
        k_id: '2',
        v: [
          {
            id: '1193',
            name: '1'
          },
          {
            id: '1194',
            name: '2'
          }
        ],
        k_s: 's2',
        count: 2
      }
    ],
    list: [
      {
        id: 2259,
        price: 100,
        discount: 100,
        code: '',
        s1: '1215',
        s2: '1193',
        s3: '0',
        s4: '0',
        s5: '0',
        stock_num: 110,
        goods_id: 946755
      },
      {
        id: 2260,
        price: 100,
        discount: 100,
        code: '',
        s1: '1215',
        s2: '1194',
        s3: '0',
        s4: '0',
        s5: '0',
        stock_num: 0,
        goods_id: 946755
      },
      {
        id: 2257,
        price: 100,
        discount: 100,
        code: '',
        s1: '30349',
        s2: '1193',
        s3: '0',
        s4: '0',
        s5: '0',
        stock_num: 111,
        goods_id: 946755
      },
      {
        id: 2258,
        price: 100,
        discount: 100,
        code: '',
        s1: '30349',
        s2: '1194',
        s3: '0',
        s4: '0',
        s5: '0',
        stock_num: 6,
        goods_id: 946755
      }
    ],
    messages: [
      {
        datetime: '0',
        disable: false,
        multiple: '0',
        name: '留言1',
        type: 'text',
        required: '1'
      },
      {
        datetime: '0',
        disable: false,
        multiple: 0,
        name: '留言2',
        type: 'id_no',
        required: 0
      },
      {
        datetime: '0',
        disable: false,
        multiple: 0,
        name: '留言3',
        type: 'image',
        required: 0
      },
      {
        datetime: '0',
        disable: false,
        multiple: 1,
        name: '留言4',
        type: 'text',
        required: 0
      },
      {
        datetime: '0',
        disable: false,
        name: '数字',
        multiple: 0,
        type: 'tel',
        required: 0
      },
      {
        datetime: '0',
        disable: false,
        name: '邮件',
        multiple: 0,
        type: 'email',
        required: 0
      },
      {
        datetime: '0',
        disable: false,
        name: '日期',
        multiple: 0,
        type: 'date',
        required: 0
      },
      {
        datetime: '0',
        disable: false,
        name: '时间含日期',
        multiple: 0,
        type: 'time',
        required: 0
      },
      {
        datetime: '0',
        disable: false,
        name: '时间',
        multiple: 0,
        type: 'time',
        required: 0
      }
    ],
    properties: [
      {
        k_id: 123,
        k: '加冰',
        v: [
          {
            id: 1222,
            name: '少冰',
            price: 1,
          },
          {
            id: 1223,
            name: '去冰',
            price: 1,
          }
        ],
      },
      {
        k_id: 133,
        k: '不知道',
        v: [
          {
            id: 1244,
            name: '什么',
            price: 9,
          }
        ],
      },
      {
        k_id: 124,
        k: '加料',
        is_multiple: true,
        v: [
          {
            id: 1224,
            name: '布丁',
            price: 3,
          },
          {
            id: 1225,
            name: '波霸',
            price: 4,
          },
          {
            id: 1226,
            name: '珍珠',
            price: 5,
          }
        ],
      }
    ],
  },
};

export const initialSku = {
  s1: '30349',
  s2: '1193',
  selectedNum: 3,
  selectedProp: {
    123: [1222],
    133: [1244],
    124: [1225, 1226],
  },
};
