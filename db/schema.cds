
using {
  managed,
  cuid
} from '@sap/cds/common';
namespace my.bookshop3;

entity Books : managed ,cuid {
      title    :  String;
      author   : Association to Authors;
      stock    : Integer;
      image    : String;
      price    : Decimal(9, 2);
      descr    :  String;
      category : Association to Categories;
      weight   : Decimal(9, 2);
      length   : Decimal(9, 2);
      width    : Decimal(9, 2);
      height   : Decimal(9, 2);


}

entity Categories : managed , cuid {
      name :  String;
}

entity Authors : managed , cuid{
      name  : String;
      books : Association to many Books
                on books.author = $self;
}

entity Orders : managed , cuid {
      book    : Association to Books;
      country : String;
      amount  : Integer;
}
