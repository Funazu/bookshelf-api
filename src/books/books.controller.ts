import { Controller, Get, Param, Post, Body, Put, Delete, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { FilterBookDto } from './dto/filter-book.dto';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) { }
    @Get()
    getBooks(@Query() filter: FilterBookDto) {

        return this.booksService.getBooks(filter);
    }

    @Get('/:id')
    getBook(@Param('id') id: string) {
        return this.booksService.getBook(id)
    }

    @Post()
    createBook(
        @Body() payload: CreateBookDto) {
        console.log(payload);
        return this.booksService.createBook(payload);
    }

    @Put('/:id')
    updateBook(@Param('id') id: string, @Body() payload: UpdateBookDto) {
        return this.booksService.updateBook(id, payload);
    }

    @Delete('/:id')
    deleteBook(@Param('id') id: string) {
        return this.booksService.deleteBook(id);
    }
}
