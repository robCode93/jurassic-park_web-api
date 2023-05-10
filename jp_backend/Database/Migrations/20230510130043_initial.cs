using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace jp_backend.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DinosaurClasses",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: true),
                    DiscoveryYear = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DinosaurClasses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FileReferences",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    FileName = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: true),
                    MimeType = table.Column<string>(type: "text", nullable: true),
                    FileSizeInBytes = table.Column<long>(type: "bigint", nullable: true),
                    CreationDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    OnDinosaur = table.Column<Guid>(type: "uuid", nullable: true),
                    OnLocality = table.Column<Guid>(type: "uuid", nullable: true),
                    OnEmployee = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FileReferences", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Habitats",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: true),
                    Coordinates = table.Column<string>(type: "text", nullable: false),
                    SizeInSquareKilometers = table.Column<double>(type: "double precision", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Habitats", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Periods",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: true),
                    AgeStartInMillions = table.Column<double>(type: "double precision", nullable: false),
                    AgeEndInMillions = table.Column<double>(type: "double precision", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Periods", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DinosaurLocalities",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: true),
                    Country = table.Column<string>(type: "text", nullable: true),
                    ThumbnailId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DinosaurLocalities", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DinosaurLocalities_FileReferences_ThumbnailId",
                        column: x => x.ThumbnailId,
                        principalTable: "FileReferences",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: true),
                    Firstname = table.Column<string>(type: "text", nullable: false),
                    Lastname = table.Column<string>(type: "text", nullable: false),
                    Birthdate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Gender = table.Column<string>(type: "text", nullable: false),
                    JobTitle = table.Column<string>(type: "text", nullable: true),
                    SkillLevel = table.Column<int>(type: "integer", nullable: true),
                    PhoneNumber = table.Column<string>(type: "text", nullable: true),
                    EmailAddress = table.Column<string>(type: "text", nullable: true),
                    ThumbnailId = table.Column<Guid>(type: "uuid", nullable: true),
                    DinosaurHabitatId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Employees_FileReferences_ThumbnailId",
                        column: x => x.ThumbnailId,
                        principalTable: "FileReferences",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Employees_Habitats_DinosaurHabitatId",
                        column: x => x.DinosaurHabitatId,
                        principalTable: "Habitats",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Dinosaurs",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: true),
                    BirthDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    EatingPattern = table.Column<string>(type: "text", nullable: true),
                    ModeOfLocomotion = table.Column<string>(type: "text", nullable: true),
                    HeightInCentimeter = table.Column<int>(type: "integer", nullable: false),
                    LengthInCentimeter = table.Column<int>(type: "integer", nullable: false),
                    WeightInKilogram = table.Column<double>(type: "double precision", nullable: false),
                    DnaString = table.Column<List<string>>(type: "text[]", nullable: true),
                    PeriodId = table.Column<Guid>(type: "uuid", nullable: true),
                    ClassificationId = table.Column<Guid>(type: "uuid", nullable: true),
                    LocalityOfDiscoveryId = table.Column<Guid>(type: "uuid", nullable: true),
                    ThumbnailId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Dinosaurs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Dinosaurs_DinosaurClasses_ClassificationId",
                        column: x => x.ClassificationId,
                        principalTable: "DinosaurClasses",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Dinosaurs_DinosaurLocalities_LocalityOfDiscoveryId",
                        column: x => x.LocalityOfDiscoveryId,
                        principalTable: "DinosaurLocalities",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Dinosaurs_FileReferences_ThumbnailId",
                        column: x => x.ThumbnailId,
                        principalTable: "FileReferences",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Dinosaurs_Periods_PeriodId",
                        column: x => x.PeriodId,
                        principalTable: "Periods",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_DinosaurLocalities_ThumbnailId",
                table: "DinosaurLocalities",
                column: "ThumbnailId");

            migrationBuilder.CreateIndex(
                name: "IX_Dinosaurs_ClassificationId",
                table: "Dinosaurs",
                column: "ClassificationId");

            migrationBuilder.CreateIndex(
                name: "IX_Dinosaurs_LocalityOfDiscoveryId",
                table: "Dinosaurs",
                column: "LocalityOfDiscoveryId");

            migrationBuilder.CreateIndex(
                name: "IX_Dinosaurs_PeriodId",
                table: "Dinosaurs",
                column: "PeriodId");

            migrationBuilder.CreateIndex(
                name: "IX_Dinosaurs_ThumbnailId",
                table: "Dinosaurs",
                column: "ThumbnailId");

            migrationBuilder.CreateIndex(
                name: "IX_Employees_DinosaurHabitatId",
                table: "Employees",
                column: "DinosaurHabitatId");

            migrationBuilder.CreateIndex(
                name: "IX_Employees_ThumbnailId",
                table: "Employees",
                column: "ThumbnailId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Dinosaurs");

            migrationBuilder.DropTable(
                name: "Employees");

            migrationBuilder.DropTable(
                name: "DinosaurClasses");

            migrationBuilder.DropTable(
                name: "DinosaurLocalities");

            migrationBuilder.DropTable(
                name: "Periods");

            migrationBuilder.DropTable(
                name: "Habitats");

            migrationBuilder.DropTable(
                name: "FileReferences");
        }
    }
}
